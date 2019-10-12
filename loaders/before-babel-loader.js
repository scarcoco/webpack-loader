const loaderUtils = require('loader-utils')
const schemaValidate = require('schema-utils')

/**
 * schema define
 * require options: { test: string }
 */
const schema = {
    type: 'object',
    properties: {
        // optional
        test: {
            type: ['string']
        },
        hello: {
            anyOf: [
                { type: "array" },
                { type: "string" },
                { instanceof: "RegExp" }
            ]
        }
    },
    additionalProperties: false
}

module.exports = function (...args) {
    // loader options
    const options = loaderUtils.getOptions(this);

    schemaValidate(schema, options);

    console.log('before: ', args)

    return args
}