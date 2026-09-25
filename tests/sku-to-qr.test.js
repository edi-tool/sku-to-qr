const { test } = require('node:test');
const assert = require('node:assert/strict');
const { read, load } = require('./helpers');
const QRCode = require('../qrcode.min.js');

// QRCode.toDataURL を差し替え、生成に渡された URL と設定を受け取る
function generate(input) {
  const el = (extra = {}) => ({ textContent: '', innerHTML: '', style: {}, appendChild() {}, ...extra });
  const els = {
    skuInput: { value: input },
    errorMsg: el(),
    'qrcode-container': el(),
    urlDisplay: el(),
    downloadLink: el(),
    downloadBtn: el(),
  };
  const calls = [];
  const api = load({
    functions: ['normalizeNumber', 'generateQRCode'],
    globals: {
      document: { getElementById: (id) => els[id], createElement: () => ({}) },
      QRCode: { toDataURL: (url, opts, cb) => { calls.push({ url, opts }); cb(null, 'data:image/png;base64,xx'); } },
      console,
    },
  });
  api.generateQRCode();
  return { calls, els };
}

test('4 桁の SKU から商品ページの URL を作る（全角数字も可）', () => {
  assert.equal(generate('1234').calls[0].url, 'https://www.toyokan.co.jp/products/1234');
  assert.equal(generate('１２３４').calls[0].url, 'https://www.toyokan.co.jp/products/1234');
});

test('4 桁の数字以外はエラーにして生成しない', () => {
  for (const bad of ['123', '12345', 'abcd', '', '12 4']) {
    const { calls, els } = generate(bad);
    assert.equal(calls.length, 0, bad);
    assert.match(els.errorMsg.textContent, /4桁の数字/);
  }
});

test('印刷用プリセット：誤り訂正 H・マージン 4・幅 1600px・モノクロ（README の仕様表）', () => {
  const { opts } = generate('1234').calls[0];
  assert.equal(opts.errorCorrectionLevel, 'H');
  assert.equal(opts.margin, 4);
  assert.equal(opts.width, 1600);
  assert.equal(opts.color.dark, '#000000ff');
  assert.equal(opts.color.light, '#ffffffff');
  const readme = read('README.md');
  assert.match(readme, /`width: 1600`/);
});

test('ダウンロード名は QR_SKU{番号}.png', () => {
  const { els } = generate('0042');
  assert.equal(els.downloadLink.download, 'QR_SKU0042.png');
  assert.equal(els.downloadBtn.style.display, 'block');
});

test('同梱の node-qrcode で実際にシンボルを作れる（誤り訂正 H）', () => {
  const qr = QRCode.create('https://www.toyokan.co.jp/products/1234', { errorCorrectionLevel: 'H' });
  assert.ok(qr.modules.size >= 21);
  assert.equal(qr.errorCorrectionLevel.bit, 2); // H
});

test('外部送信するコードがない', () => {
  assert.doesNotMatch(read('index.html'), /\bfetch\(|sendBeacon|XMLHttpRequest|WebSocket/);
});
