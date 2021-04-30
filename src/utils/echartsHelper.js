import groupBy from "lodash/groupBy";
import map from "lodash/map";
import uniq from "lodash/uniq";
export function toEChartSData(data, x, y, s, sort) {
  if (void 0 === x || void 0 === y || void 0 === s) return data;
  var xAxis = [],
    yAxis = [],
    j = {},
    legend = uniq(map(data, s)),
    series = groupBy(data, function(a) {
      var c = a[s];
      return j[c] || (j[c] = !0), c;
    });
  xAxis = uniq(map(data, x));
  yAxis = uniq(map(data, y));
  sort && xAxis.sort(sort);
  return {
    xAxis,
    yAxis,
    series,
    legend
  };
}

export function getSeriesValue(data, sKey) {
  return uniq(map(data, sKey));
}
