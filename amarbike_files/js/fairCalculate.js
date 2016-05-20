(function() {
    'use strict';
    var amarBikeApp = angular.module('AmarBike');

    var fairCalculateService = function() {


        var shortestPath = function(graph, source, target) {
            
            if (source == target) { // Delete these four lines if
                print(source); // you want to look for a cycle
                return; // when the source is equal to
            } // the target.
            var queue = [source],
                visited = {
                    source: true
                },
                predecessor = {},
                cost = 0,
                tail = 0;
            while (tail < queue.length) {
                var u = queue[tail++], // Pop a vertex off the queue.
                    neighbors = graph.neighbors[u];
                for (var i = 0; i < neighbors.length; ++i) {
                    var v = neighbors[i];
                    if (visited[v]) {
                        continue;
                    }
                    visited[v] = true;
                    if (v === target) { // Check if the path is complete.
                        var path = [v]; // If so, backtrack through the path.
                        while (u !== source) {
                            path.push(u);
                            u = predecessor[u];
                            cost++;
                        }
                        cost++;
                        path.push(u);
                        path.reverse();
                        cost = cost * 5;
                        return cost;
                    }
                    predecessor[v] = u;
                    queue.push(v);
                }
            }
            print('there is no path from ' + source + ' to ' + target);
        }

        return {
            shortestPath: shortestPath
        }

    };

    amarBikeApp.factory('fairCalculateService', fairCalculateService);

}());