import validate from 'webpack-validator';
import merge from 'webpack-merge';

import * as wpBase from './webpack-parts/webpack-base.babel';
import * as wpLoaders from './webpack-parts/webpack-loaders.babel';
import * as wpPreLoaders from './webpack-parts/webpack-preloaders.babel';
import * as wpPlugins from './webpack-parts/webpack-plugins.babel';

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
const developmentConfig = merge({},
  wpBase.getEntry(),
  wpBase.getOutput(),
  wpBase.getResolve(),
  wpBase.getDevTool('source-map'),
  wpBase.getDevServer(),
  wpPreLoaders.getEslint(),
  wpPreLoaders.getTslint(),
  wpLoaders.getJson(),
  wpLoaders.getHtml(),
  wpLoaders.getBabel(),
  wpLoaders.getAwesomeTypescript(),
  wpLoaders.getNgAnnotate(),
  wpLoaders.getScss(),
  wpLoaders.getImages(),
  wpLoaders.getFonts(),
  wpPlugins.getSassLint(),
  wpPlugins.getForkChecker(),
  wpPlugins.getOccurenceOrder(),
  wpPlugins.getCommonsChunk(),
  wpPlugins.getHtmlWebpack(),
  wpPlugins.getBrowserSync()
);

export default validate(developmentConfig, {
  quiet: true
});
