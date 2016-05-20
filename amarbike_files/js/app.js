(function() {

    var amarBikeApp = angular.module('AmarBike', []);

    function MainController($scope, fairCalculateService) {
        $scope.options = ['Mirpur-2', 'Proshikha', 'Mirpur-6','Commerce-College', 'Shialbari', 'Monipur-School(Rupagar)', 'Milk-Vita', 'Arambagh', 'Mirpur-Zoo', 'Sony-Hall', 'Ansar-Camp', 'Tolarbagh', 'Bangla-College' , 'Kallayanpur', 'Cholontikamor', 'DOHS-Mirpur', 'Mirpur-12', 'Mirpur-11.5', 'Mirpur-11', 'Original-10', 'Mirpur-10', 'Mirpur-13', 'Mirpur-14', 'Kachukhet', 'Kajipara', 'Shawrapara', 'Taltola', 'Agargaon', 'German-Technical', '60-feet-1', '60-feet-2', '60-feet-2', '60-feet-3', '60-feet-4', '60-feet-5', '60-feet-6', 'Bangladesh-Betar'];
       
         function Graph() {
            var neighbors = this.neighbors = {}; // Key = vertex, value = array of neighbors.

                this.addEdge = function(u, v) {
                    if (neighbors[u] === undefined) { // Add the edge u -> v.
                        neighbors[u] = [];
                    }
                    neighbors[u].push(v);
                    if (neighbors[v] === undefined) { // Also add the edge v -> u in order
                        neighbors[v] = []; // to implement an undirected graph.
                    } // For a directed graph, delete
                    neighbors[v].push(u); // these four lines.
                };

                return this;
        }


         var graph;
            var init = function() {
                  graph = new Graph();
                  graph.addEdge('Mirpur-Zoo', 'Commerce-College');
                  graph.addEdge('Commerce-College', 'Sony-Hall');
                  graph.addEdge('Sony-Hall', 'Ansar-Camp');
                  graph.addEdge('Ansar-Camp', 'Tolarbagh');
                  graph.addEdge('Tolarbagh', 'Bangla-College');
                  graph.addEdge('Bangla-College', 'Kallayanpur');
                  graph.addEdge('Mirpur-2', 'Proshikha');
                  graph.addEdge('Proshikha', 'Shialbari');
                  graph.addEdge('Proshikha', 'Mirpur-6');
                  graph.addEdge('Mirpur-6', 'Original-10');
                  graph.addEdge('Proshikha', 'Cholontikamor');
                  graph.addEdge('Shialbari', 'Commerce-College');
                  graph.addEdge('Shialbari', 'Monipur-School(Rupagar)');
                  graph.addEdge('Monipur-School(Rupagar)', 'Milk-Vita');
                  graph.addEdge('Milk-Vita', 'Arambagh');
                  graph.addEdge('Arambagh', 'Cholontikamor');
                  graph.addEdge('Cholontikamor', 'Mirpur-11');
                  graph.addEdge('Mirpur-11', 'Mirpur-11.5');
                  graph.addEdge('Mirpur-11.5', 'Mirpur-12');
                  graph.addEdge('Mirpur-12', 'DOHS-Mirpur');
                  graph.addEdge('Mirpur-11', 'Original-10');
                  graph.addEdge('Original-10', 'Mirpur-10');
                  graph.addEdge('Mirpur-10', 'Mirpur-13');
                  graph.addEdge('Mirpur-13', 'Mirpur-14');
                  graph.addEdge('Mirpur-14', 'Kachukhet');
                  graph.addEdge('Mirpur-10', 'Mirpur-2');
                  graph.addEdge('Mirpur-2', 'German-Technical');
                  graph.addEdge('German-Technical', 'Sony-Hall');
                  graph.addEdge('Mirpur-2', '60-feet-1');
                  graph.addEdge('60-feet-1', '60-feet-2');
                  graph.addEdge('60-feet-2', '60-feet-3');
                  graph.addEdge('60-feet-3', '60-feet-4');
                  graph.addEdge('60-feet-4', '60-feet-5');
                  graph.addEdge('60-feet-5', '60-feet-6');
                  graph.addEdge('60-feet-6', 'Bangladesh-Betar');
                  graph.addEdge('Mirpur-10', 'Kajipara');
                  graph.addEdge('Kajipara', 'Shawrapara');
                  graph.addEdge('Shawrapara', 'Taltola');
                  graph.addEdge('Taltola', 'Agargaon');
                  graph.addEdge('Agargaon', '60-feet-4');
                console.log(graph);
                //print();
                //console.log(shortestPath(graph, 'G', 'F'));
            };
            init();

        $scope.update = function() {
            // $scope.distance = $scope.source - $scope.destination;
            //if ($scope.distance < 0) $scope.distance = (-1) * $scope.distance;
            //var array = [15, 15, 14, 14, 12, 12, 10, 10, 7, 7, 5, 5, 5, 5, 2];
            //$scope.cost = array.slice(0, $scope.distance).reduce(function(a, b) {
            //   return a + b;
            //});

            console.log("source ", $scope.source);
            console.log("destination ", $scope.destination);
            $scope.cost = fairCalculateService.shortestPath(graph, $scope.source, $scope.destination);
          
            //fairCalculateService.shortestPath(graph, $scope.source, $scope.destination)
        }
    }


    amarBikeApp.controller('MainController', ['$scope', 'fairCalculateService', MainController]);

}())