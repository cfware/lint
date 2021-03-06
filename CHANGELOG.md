# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.0.6](https://github.com/cfware/lint/compare/v2.0.5...v2.0.6) (2021-01-16)


### Bug Fixes

* Unpin resolve module ([6b7a793](https://github.com/cfware/lint/commit/6b7a793049cf9eaa71bac932b060aaa99972cd32))

### [2.0.5](https://github.com/cfware/lint/compare/v2.0.4...v2.0.5) (2021-01-16)


### Bug Fixes

* Switch to @babel/eslint-parser ([88a3042](https://github.com/cfware/lint/commit/88a30421db8dada2d7b58e3f6d31bbcb875aee28))

### [2.0.4](https://www.github.com/cfware/lint/compare/v2.0.3...v2.0.4) (2020-10-19)


### Bug Fixes

* Pin resolve@1.17.0 to silence deprecation warning ([79b45da](https://www.github.com/cfware/lint/commit/79b45da965440c12a2eb2c6c709ba497f5c4129c))

### [2.0.3](https://www.github.com/cfware/lint/compare/v2.0.2...v2.0.3) (2020-09-27)


### Bug Fixes

* Ignore inline istanbul comments ([a26f7da](https://www.github.com/cfware/lint/commit/a26f7dabea254861d3d292a84a13a26f2f61d49e))

### [2.0.2](https://www.github.com/cfware/lint/compare/v2.0.1...v2.0.2) (2020-09-21)


### Bug Fixes

* Allow use of `self` global for service workers ([485f6ac](https://www.github.com/cfware/lint/commit/485f6acdf34eb900baa1b6f604464ef77cf5294f))

### [2.0.1](https://www.github.com/cfware/lint/compare/v2.0.0...v2.0.1) (2020-08-23)


### Bug Fixes

* Allow implicit undefined getter-return ([e6ef857](https://www.github.com/cfware/lint/commit/e6ef857fad8d116dc1911253d845267df983085b))

## [2.0.0](https://github.com/cfware/lint/compare/v1.5.0...v2.0.0) (2020-08-18)


### ⚠ BREAKING CHANGES

* Upgrade eslint-plugin-unicorn to 21.0.0

### Features

* Enable import/no-named-default ([c4bc3a0](https://github.com/cfware/lint/commit/c4bc3a0c295c9f869b6bf841a417095d98509351))
* Enable unicorn/custom-error-definition ([6aa8049](https://github.com/cfware/lint/commit/6aa804980c59d1be15af01a531a3d309efd60f54))
* Restrict fs/promises to Node.js 14 ([322de76](https://github.com/cfware/lint/commit/322de76adb9c4a4f206744cd9b0b705412cc6514))
* Upgrade eslint-plugin-unicorn to 21.0.0 ([faa79cc](https://github.com/cfware/lint/commit/faa79cc72c4ba2d817e6861ee95cc1110eef0018))
* Upgrade to eslint 7 ([6ec6c3d](https://github.com/cfware/lint/commit/6ec6c3d85595e5a2737e15a8192cfa5f2c8e4b0f))


### Bug Fixes

* Correct handling of Node.js version based rules ([591ae3f](https://github.com/cfware/lint/commit/591ae3f4b91e0f694d3145ed8563f82112b5e8c5))
* Expand restricted globals with confusing-browser-globals ([7957b93](https://github.com/cfware/lint/commit/7957b93d13b106d62e81f01d1dd1c9df9f5fb49d))
* Remove redundant reporting of `new Buffer()` ([0177dc4](https://github.com/cfware/lint/commit/0177dc4974f38b299fc8a0d53209ab3544856d69))
* Use env es2020, enable globalThis ([676baf0](https://github.com/cfware/lint/commit/676baf090d52810eb004d33106327bc32f6e04d2))

## [1.5.0](https://www.github.com/cfware/lint/compare/v1.4.3...v1.5.0) (2020-05-27)


### Features

* Prevent no-unresolved from reporting self-resolution. ([200bdbd](https://www.github.com/cfware/lint/commit/200bdbd911a25042bc91eaf418e1958ea935a02b))

### [1.4.3](https://github.com/cfware/lint/compare/v1.4.2...v1.4.3) (2020-05-04)


### Bug Fixes

* Disable unicorn/no-fn-reference-in-iterator ([dfb542d](https://github.com/cfware/lint/commit/dfb542d9bb87c4896ce0c89cb63e04799281db29))

### [1.4.2](https://github.com/cfware/lint/compare/v1.4.1...v1.4.2) (2020-04-27)


### Bug Fixes

* Disable unicorn/no-null ([720fa34](https://github.com/cfware/lint/commit/720fa340313936a3f1f05d8da715e7f762b28917))

### [1.4.1](https://github.com/cfware/lint/compare/v1.4.0...v1.4.1) (2020-04-27)


### Bug Fixes

* Update dependencies ([ad8c059](https://github.com/cfware/lint/commit/ad8c05991b465e0929c96aee321a76378e13437d))
* **package:** update eslint-plugin-unicorn to version 18.0.0 ([#3](https://github.com/cfware/lint/issues/3)) ([a41eddc](https://github.com/cfware/lint/commit/a41eddc680f149dd0c3cbf34069e5f24220d8c33))

## [1.4.0](https://github.com/cfware/lint/compare/v1.3.0...v1.4.0) (2020-03-15)


### Features

* Reduce many style rules to warnings outside CI ([525844f](https://github.com/cfware/lint/commit/525844f79285a153352d828c93a012f4f9616c4a))

## [1.3.0](https://github.com/cfware/lint/compare/v1.2.0...v1.3.0) (2020-03-08)


### Features

* add node/no-unsupported-features/node-builtins ([d0dbb82](https://github.com/cfware/lint/commit/d0dbb827c25f720d33fdd078712a116e307a1d5a))


### Bug Fixes

* eslint-comments/no-unused-disable warn instead of error ([4c3ee21](https://github.com/cfware/lint/commit/4c3ee21b40fffa9121d5675afafb013f5ccbc21b))
* **package:** update eslint-plugin-unicorn to version 17.0.0 ([#2](https://github.com/cfware/lint/issues/2)) ([c36c838](https://github.com/cfware/lint/commit/c36c83891b0c968a4758484f72ed085b3aed7d12))

## [1.2.0](https://github.com/cfware/lint/compare/v1.1.3...v1.2.0) (2020-02-13)


### Features

* Additional rules ([e79eba7](https://github.com/cfware/lint/commit/e79eba77886d512a3832e85dcd9de32ab31ca233))

### [1.1.3](https://github.com/cfware/lint/compare/v1.1.2...v1.1.3) (2020-02-08)


### Bug Fixes

* Remove unicorn/prefer-replace-all ([8b50364](https://github.com/cfware/lint/commit/8b50364ae7605d28d4f58ab6b68f1b2d4661e1bc))

### [1.1.2](https://github.com/cfware/lint/compare/v1.1.1...v1.1.2) (2020-02-06)


### Bug Fixes

* Disable import/order for bugs ([099f0c2](https://github.com/cfware/lint/commit/099f0c28e20de68b819f368e65a9bf8b838604fc))

### [1.1.1](https://github.com/cfware/lint/compare/v1.1.0...v1.1.1) (2020-02-06)


### Bug Fixes

* Pin eslint-plugin-import to 2.20.0 ([2bbde67](https://github.com/cfware/lint/commit/2bbde675f9beeedaca41b10b270c7a06dcaf22bc))

## [1.1.0](https://github.com/cfware/lint/compare/v1.0.1...v1.1.0) (2020-02-03)


### Features

* Add unicorn/prefer-replace-all ([b6a6021](https://github.com/cfware/lint/commit/b6a602187600e50a82b2bb720353e932d83ae1e9))


### Bug Fixes

* **package:** update eslint-plugin-unicorn to version 16.0.0 ([#1](https://github.com/cfware/lint/issues/1)) ([f471350](https://github.com/cfware/lint/commit/f47135060b8b94c203ec86e8c48412abad5ed49a))

### [1.0.1](https://github.com/cfware/lint/compare/v1.0.0...v1.0.1) (2020-01-06)


### Bug Fixes

* dynamic import() is supported ([9b95a80](https://github.com/cfware/lint/commit/9b95a80bdae8d2cee4c7ddf72eafcfb7f6a38e8e))

## 1.0.0 (2019-12-31)


### Features

* Initial implementation ([c5b29ab](https://github.com/cfware/lint/commit/c5b29abb7a34b288996dcafec2fb640855bb6b33))
