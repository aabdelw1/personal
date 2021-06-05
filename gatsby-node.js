/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// exports.onCreatePage = async ({page, actions}) => {
// 	const {createPage} = actions
	
// }
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	if (stage === 'build-html' || stage === 'develop-html' || stage === 'develop') {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /bad-module/,
						use: loaders.null(),
					},
				],
			},
		})
	}
}