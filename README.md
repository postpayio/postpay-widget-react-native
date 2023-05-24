
[![npm version](https://badge.fury.io/js/postpay-widget-react-native.svg)](https://badge.fury.io/js/postpay-widget-react-native) ![](https://img.shields.io/github/issues/postpayio/postpay-widget-react-native.svg) ![](https://img.shields.io/github/stars/postpayio/postpay-widget-react-native.svg) ![](https://img.shields.io/github/license/postpayio/postpay-widget-react-native.svg) [![npm](https://img.shields.io/npm/dm/postpay-widget-react-native.svg)](https://npmjs.com/package/@dev-postpay/widget-react-native)

[![NPM](https://nodei.co/npm/@dev-postpay/widget-react-native.png?downloads=true&stars=true)](https://nodei.co/npm/@dev-postpay/widget-react-native/)

## Descriptions

Postpay SDK for React Native, this library supports both iOS & Android

_Base on https://ui.postpay.io/widgets (Using for website integratetion)_

## Prerequisites

This library uses [react-native-webview](https://github.com/react-native-webview/react-native-webview)
to render webview. Therefore this library needs to be installed **AND** linked into your project to work.

Other than the above dependency this library uses pure javascript and supports both iOS and Android

## Example

You can check it out [react-native-postpay-widget-example](https://github.com/postpayio/react-native-postpay-widget-example)

## Getting started

`$ npm install @dev-postpay/widget-react-native --save`

- OR

`$ yarn add @dev-postpay/widget-react-native`

## Usage
```javascript
import { PostpayWidget } from '@dev-postpay/widget-react-native';

<PostpayWidget
    merchantId="id_c56705f1a9304e8c8a16e1da98ec8734"
    widgetType='product'
    amount="20050"
    currency="AED"
    locale="en"
    widgetUrl="https://widgets-dev.postpay.io"
    numInstalments={2}
/>
```

#### Props

```javascript
type PostpayWidgetProps = {
    merchantId: Number,
    widgetType: 'payment-summary' | 'product',
    locale?: 'en' | 'ar',
    widgetUrl?: String,
    amount: Number,
    currency: String,
    closeButton?: Boolean,
    numInstalments?: Number,
    style?: StyleProp<ViewStyle>,
};
```
---

## License

This module is [MIT licensed](./LICENSE)

---
