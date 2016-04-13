"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function (_ref) {
    var Plugin = _ref.Plugin;
    var t = _ref.types;

    return new Plugin("class-display-name", {
        visitor: {
            ClassDeclaration: function ClassDeclaration(node, parent, scope, file) {
                (parent.type === 'ExportDefaultDeclaration' ? this.parentPath : this).insertAfter([// take the "export default class ..." form into account
                t.expressionStatement(t.assignmentExpression("=", t.memberExpression(node.id, t.identifier("displayName")), t.literal(node.id.name)))]);
            }
        }
    });
};

module.exports = exports["default"];