# Imageshop Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## 1.0.0 - 2018-12-11
### Released
- Initial release

## 1.0.1 - 2018-12-11
### Bug fix
- Fixed bug in editor

## 1.0.3 - 2018-12-13
### Fixed vulnerabilities
- Fixed vulnerability with node-sass dependency 'cryptiles'
- Fixed vulnerability with node-sass dependency 'hoek'

## 1.0.4 - 2018-12-13
### Extended caching for image transforms
- Transforms are fairly slow to create, after checking with Imageshop the urls can be cached for a very long time. Set cache duration for images to 1 year

## 1.0.5 - 2018-12-13
### Readme bug

## 1.0.6 - 2018-12-14
### Bugfix
- Added translation filter to button text

## 1.0.7 - 2018-12-14
### Feature
- Added content table image preview

## 1.0.8 - 2018-12-14
### Bugfix
- Fixed issue with table image preview when empty

## 1.0.9 - 2018-12-14
### Feature
- Added base64 encoded transparent pixel property
- Added original url property
- Fixed documentation

## 1.0.10 - 2019-03-29
### Bugfix
- Fixed typos in documentation
- Set permalink cache to 1 year