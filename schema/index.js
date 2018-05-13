const { fileLoader, mergeTypes } = require('merge-graphql-schemas');
const path = require('path');
const issueType = require('./types/issue.graphql');

const typesArray = [issueType];

const typeDefs = mergeTypes(typesArray, { all: true });

module.exports = typeDefs;
