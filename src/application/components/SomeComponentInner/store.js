import Store from "../../common/store";

class SomeComponentInnerStore extends Store {}

export default new SomeComponentInnerStore({ someComponentInnerClicksCount: 0 });
