/* global J$ */

"use strict";

(function (sandbox) {
	function UnaryPreAnalysis() {
		this.callbackName = "unaryPre";

		this.wrapperObjectsHandler = sandbox.utils.wrapperObjectsHandler;

		var dis = this;

		this.callback = function (iid, op, left) {
			if (op === "typeof") {
				left = dis.wrapperObjectsHandler.getFinalRealObjectFromProxy(left);
			}

			return {
				op: op,
				left: left,
				skip: false
			};
		};
	}

	sandbox.analysis = new UnaryPreAnalysis();

}(J$));