export default {
    input: 'lib/index.js',
    output: {
        file :'lib/bundles.umd.js',
        name: 'config.module',
        format: 'umd',
        sourcemap: false,
        globals: {
          '@angular/core': 'ng.core',
          'rxjs/Observable': 'Rx',
          'rxjs/ReplaySubject': 'Rx',
          'rxjs/add/operator/map': 'Rx.Observable.prototype',
          'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
          'rxjs/add/observable/fromEvent': 'Rx.Observable',
          'rxjs/add/observable/of': 'Rx.Observable'
        }
    }
  }