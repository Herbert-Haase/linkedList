import { equal } from "assert";
import { LinkedList } from "../src/linkedList.js";

describe("create, append, and prepend Node", function () {
  it("create Node", () => {
    const newLL = new LinkedList("value");
    equal(newLL.head.value, "value");
  });

  it("append Node", () => {
    const newLL = new LinkedList("value");
    newLL.append("appendValue1");
    equal(newLL.head.next.value, "appendValue1");
    equal(newLL.head.value, "value");
    newLL.append("appendValue2");
    newLL.append("appendValue3");
    equal(newLL.head.next.next.next.value, "appendValue3");
    equal(newLL.head.value, "value");
  });
  it("prepend Node", () => {
    const newLL = new LinkedList("value");
    newLL.prepend("prependValue1");
    equal(newLL.head.value, "prependValue1");
    equal(newLL.head.next.value, "value");
    newLL.prepend("prependValue2");
    newLL.prepend("prependValue3");
    equal(newLL.head.value, "prependValue3");
    equal(newLL.head.next.value, "prependValue2");
  });
});

describe("misc", () => {
  it("size", () => {
    const newLL = new LinkedList("value1");
    equal(newLL.size(), 1);
    newLL.append("value2");
    equal(newLL.size(), 2);
    newLL.append("value3");
    equal(newLL.size(), 3);
  });
  it("head", () => {
    const newLL = new LinkedList("value");
    equal(newLL.head.value, "value");
    newLL.prepend("prepend");
    equal(newLL.head.value, "prepend");
  });
  it("tail", () => {
    const newLL = new LinkedList("value");
    equal(newLL.tail.value, "value");
    newLL.append("prepend");
    equal(newLL.tail.value, "prepend");
  });
  it("at", () => {
    const newLL = new LinkedList("value0");
    newLL.append("value1");
    newLL.append("value2");
    equal(newLL.at(0).value, "value0");
    equal(newLL.at(1).value, "value1");
    equal(newLL.at(2).value, "value2");
  });
  it("pop", () => {
    const newLL = new LinkedList("value0");
    newLL.append("value1");
    newLL.pop();
    equal(newLL.size(), 1);
    newLL.pop();
    equal(newLL.head, null);
  });
  it("find", () => {
    const newLL = new LinkedList("value0");
    newLL.append("value1");
    newLL.append("value2");
    newLL.append("value3");
    equal(newLL.find("value0"), 0);
    equal(newLL.find("value1"), 1);
    equal(newLL.find("value2"), 2);
    equal(newLL.find("value3"), 3);
  });
  it("contains", () => {
    const newLL = new LinkedList("value0");
    newLL.append("value1");
    equal(newLL.contains("value0"), true);
    equal(newLL.contains("value1"), true);
    equal(newLL.contains("something"), false);
  });
  it("toString", () => {
    const newLL = new LinkedList("value0");
    equal(newLL.toString(), "( value0 ) -> null");
    newLL.append("value1");
    equal(newLL.toString(), "( value0 ) -> ( value1 ) -> null");
  });
  it("insertAt", () => {
    const newLL = new LinkedList("value0");
    newLL.append("value1");
    newLL.append("value3");
    newLL.append("value4");
    newLL.insertAt("value2", 2);
    equal(newLL.at(2).value, "value2");
  });
  it("removeAt", () => {
    const newLL = new LinkedList("value0");
    newLL.append("value1");
    newLL.append("value2");
    newLL.append("value3");
    newLL.append("value4");
    newLL.removeAt(2);
    console.log(newLL.toString());
    equal(newLL.at(2).value, "value3");
  });
});
