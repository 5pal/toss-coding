const obj1 = {
  repository: undefined,
};

const obj2 = {
  repository: {
    readme: undefined,
  },
};

const obj3 = {
  repository: {
    readme: {
      extension: "md",
      content: "금융을 쉽고 간편하게",
    },
  },
};

function safelyGet(object, path) {
  const properties = path.split(".");
  let current = object;

  for (const property of properties) {
    if (current === undefined) {
      return undefined;
    }
    current = current[property];
  }
  return current;
}

const result = safelyGet(obj3, "repository.readme.extension");
console.log(obj2["repository"]);
console.log(typeof obj3["repository"], "result");
