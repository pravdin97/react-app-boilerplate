const deepCopy = (obj) => {
  if (!(obj instanceof Object)) return obj;

  if (Array.isArray(obj)) {
    const newArray = [];
    for (const item of obj) {
      const newValue = deepCopy(item);
      newArray.push(newValue);
    }

    return newArray;
  }

  const entries = Object.entries(obj);
  const newObject = {};
  for (const entry of entries) {
    const newValue = deepCopy(entry[1]);
    newObject[entry[0]] = newValue;
  }

  return newObject;
};

// export default { deepCopy };

const print = (msg, o) => console.log(`${msg}: `, JSON.stringify(o, null, 2));

const testDeepCopy = () => {
  const og = {
    name: 'Egor',
    age: 23,
    jobs: ['backend', 'frontend'],
    preferences: [
      {
        frontend: {
          framework: 'React',
          cssPreprocessor: 'less',
        },
      },
      {
        backend: {
          framework: 'Node.js',
          db: ['mongo', 'pg'],
        },
      },
    ],
  };
  const copy = deepCopy(og);
  print('og: ', og);
  print('copy: ', copy);

  og.preferences[0].frontend.framework = 'Vue';
  print('og after change framework in og: ', og);
  print('copy after change framework in og: ', copy);
};

testDeepCopy();
