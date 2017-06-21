/*
    Паттерн стратегия на примере калькулятора
*/
var Calculator = (function () {

    /**
     * Создает экземпляр конструктора
     */
    function Calculator() {

        /** Встроенные стратегии */
        this._methods = {

            /** Стратегия сложения */
            add: function (x, y) {
                return Number(x) + Number(y);
            },

            /** Стратегия вычитания */
            subtract: function (x, y) {
                return x - y;
            },

            /**Стратегия умножения */
            multiply: function (x, y) {
                return x * y;
            },

            /** Стратегия деления */
            divide: function (x, y) {
                return x / y;
            }
        };
    }

    /** Добавление стратегии */
    Calculator.prototype.set = function (name, method) {
      this._methods[name] = this._methods[name] !== indefined ? method : this._methods[name];
      return this;
    };

    /** Указываем стратегию и передаем параметры для обработки */
    Calculator.prototype.execute = function (method, x, y) {
        if (this._methods[method] !== undefined) {
            return this._methods[method](x, y);
        } else {
            throw new Error('Method does not exists!');
        }
    };

    return Calculator;
})();

/** создаем экземпляр калькулятора */
var a = new Calculator();

/** добавляем стратегию (возведение в степень) */
    a.set('pow', function(a, b){
      return Math.pow(a, b);
    });
