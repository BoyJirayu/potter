var angular = angular.module('potterApp', [])
  .controller('PotterListController', function ($scope) {
    var check = 0
    $scope.promotion = 0
    $scope.final = 0
    $scope.sum = 0
    $scope.amount = []
    $scope.book = [
      {
        name: "and the Philosopher's Stone",
        amount: 1,
        price: 100,
        img: '1.jpg'
      },
      {
        name: 'and the Chamber of Secrets',
        amount: 1,
        price: 100,
        img: '2.jpg'
      },
      {
        name: 'and the Prisoner of Azkaban',
        amount: 1,
        price: 100,
        img: '3.jpg'
      },
      {
        name: 'and the Goblet of Fire',
        amount: 1,
        price: 100,
        img: '4.jpg'
      },
      {
        name: 'and the Order of the Phoenix',
        amount: 1,
        price: 100,
        img: '5.jpg'
      },
      {
        name: 'and the Half-Blood Prince',
        amount: 1,
        price: 100,
        img: '6.jpg'
      },
      {
        name: 'and the Deathly Hallows',
        amount: 1,
        price: 100,
        img: '7.jpg'
      }
    ]

    $scope.buy = []

    $scope.add = function (data) {
      if ($scope.search(data)) {
        $scope.buy[check].amount += 1
      } else {
        $scope.buy.push(data)
      }

      $scope.buy.sort(function (a, b) {
        if (a.amount > b.amount) return -1
        if (a.amount < b.amount) return 1
        return 0
      })

      $scope.calculate()
    }

    $scope.remove = function (del) {
      $scope.search(del)
      if ($scope.buy[check].amount > 1) {
        $scope.buy[check].amount -= 1
      } else {
        $scope.buy.splice(check, 1)
      }
      $scope.buy.sort(function (a, b) {
        if (a.amount > b.amount) return -1
        if (a.amount < b.amount) return 1
        return 0
      })
      $scope.calculate()
    }

    $scope.calculate = function () {
      $scope.sum = 0
      for (var i = 0; i < $scope.buy.length; i++) {
        $scope.amount[i] = $scope.buy[i].amount
        $scope.sum += ($scope.amount[i] * 100)
      }

      var watch = 0
      var exit = 0
      $scope.promotion = 0
      do {
        for (var t = 0; t < $scope.amount.length; t++) {
          if ($scope.amount[t] !== 0) {
            watch += 1
          }
          if ($scope.amount[t] === 0) {
            watch += 0
            break
          }
        }
        if (watch === 2) {
          $scope.promotion += ((watch * 100) * 0.1)
          console.log('2')
        }else if (watch === 3) {
          $scope.promotion += ((watch * 100) * 0.2)
          console.log('3')
        }else if (watch === 4) {
          $scope.promotion += ((watch * 100) * 0.3)
          console.log('4')
        }else if (watch === 5) {
          $scope.promotion += ((watch * 100) * 0.4)
          console.log('5')
        }else if (watch === 6) {
          $scope.promotion += ((watch * 100) * 0.5)
          console.log('6')
        }else if (watch === 7) {
          $scope.promotion += ((watch * 100) * 0.6)
          console.log('7')
        }else if (watch === 0) {
          exit = 1
          console.log('exit')
        }

        for (var o = 0; o < $scope.amount.length; o++) {
          if ($scope.amount[o] > 0) {
            $scope.amount[o] -= 1
            watch = 0
          }
        }
      } while (exit !== 1)
      $scope.final = $scope.sum - $scope.promotion
    }

    $scope.search = function (data) {
      for (var a = 0; a < $scope.buy.length; a++) {
        if (data.name === $scope.buy[a].name) {
          check = a
          return true
        }
      }
    }
  })
