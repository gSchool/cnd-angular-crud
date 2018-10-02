
## dev setup (on mac with brew 2018-10-02)

1. `brew cask install chromedriver`
1. `brew install postgresql`
1. `brew services start postgresql`
1. `createdb`
1. `psql -c "create database volcano"`
1. `psql -c "create database volcano_test"`
1. `psql -c "create user postgres with SUPERUSER"`

## Mapping

The following topics are covered in "standard" CND:

![topics](img/topics.jpg)

Here is their mapping to Angular:

1. `Jest unit tests` -> [Service testing](https://angular.io/guide/testing#service-tests)
1. `enzyme` -> [Component Testing](https://angular.io/guide/testing#component-dom-testing) 
1. `shallow` -> [Nested Components](https://angular.io/guide/testing#nested-component-testshttps://angular.io/guide/testing#nested-component-tests)
1. `fetch` -> [HttpClient](https://angular.io/guide/http#httpclient)
1. `fetch-mock` -> [HttpClientTestingModule](http://www.syntaxsuccess.com/viewarticle/mocking-http-request-with-httpclient-in-angular)
1. `redux` -> N/A
1. `redux-thunk` -> N/A
1. `redux-first-routing` -> [Angular Router](https://angular.io/guide/router)
1. `proxy` -> [WebPack DevServer Proxy](https://juristr.com/blog/2016/11/configure-proxy-api-angular-cli/)

## Deployment

To deploy, run:

```sh
$ oc new-app --strategy=source bgard6977/docker-test~https://github.com/gSchool/cnd-angular-crud
```

The build will fail due to insufficient memory, so increase memory:

```sh
$ oc patch bc/cnd-angular-crud -p '{"spec":{"resources":{"limits":{"memory":"1Gi"}}}}'
```

## References

- [Proxy](https://juristr.com/blog/2016/11/configure-proxy-api-angular-cli/)
- [More Proxy](https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md)
- [Spring Logging](https://www.javadevjournal.com/spring/log-incoming-requests-spring/)
- [OpenShift WebHooks](https://docs.openshift.com/container-platform/3.5/dev_guide/builds/triggering_builds.html)
- [Build environment](https://github.com/bgard6977/docker-test)
- [Karma with ChromeHeadless](https://gist.github.com/wingsuitist/c2c3095b855e9f1054d39df13a317f52)
- [Testing with mock routes](https://stackoverflow.com/questions/39577920/angular-2-unit-testing-components-with-routerlink)
- [Chrome headless with karma](https://cvuorinen.net/2017/05/running-angular-tests-in-headless-chrome/)