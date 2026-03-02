export function detectAbnormal(values) {
  return values.map(test => {
    let flag = "NORMAL";

    if (test.value < test.min || test.value > test.max) {
      flag = "ABNORMAL";
    }

    return { ...test, flag };
  });
}
export function compareReports(current, previous) {
  return current.map(test => {
    const old = previous.find(p => p.name === test.name);
    if (!old) return { ...test, change: "NEW" };

    let change = "SAME";
    if (test.value > old.value) change = "WORSENED";
    if (test.value < old.value) change = "IMPROVED";

    return { ...test, change };
  });
}
