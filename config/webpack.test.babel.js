import validate from 'webpack-validator';
import merge from 'webpack-merge';

import * as wpBase from './webpack-parts/webpack-base.babel';
import * as wpPreLoaders from './webpack-parts/webpack-preloaders.babel';
import * as wpLoaders from './webpack-parts/webpack-loaders.babel';
import * as wpPostLoaders from './webpack-parts/webpack-postloaders.babel';
import * as wpPlugins from './webpack-parts/webpack-plugins.babel';

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
function getProductionConfig(failOnHint = false) {
  return merge(
    {
      entry: {}
    },
    {
      output: {}
    },
    wpBase.getResolve(),
    wpBase.getDevTool('source-map'),
    wpPreLoaders.getEslint(failOnHint),
    wpPreLoaders.getTslint(failOnHint),
    wpLoaders.getAwesomeTypescript(),
    wpLoaders.getBabel(),
    wpLoaders.getNgAnnotate(),
    wpLoaders.getScss(),
    wpLoaders.getImages(),
    wpLoaders.getFonts(),
    wpLoaders.getHtml(),
    wpLoaders.getJson(),
    wpPostLoaders.getIstanbulInstrumenter(),
    wpBase.getDevServer(),
    wpPlugins.getSassLint(failOnHint)
  );
}

export default (failOnHint = false) =>
  validate(getProductionConfig(failOnHint), {
    quiet: true
  });
