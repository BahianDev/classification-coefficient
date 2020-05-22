const read = require('../services/read');


module.exports = {
    async load(req, res) {
        const data = await read();

        const filter = data.filter(data => data.Aluno === 'K');
        const numerator = filter.map(data => data.Peso * data.Media);
        const sumNumerator = numerator.reduce(function (total, num) {
            return total + num;
        }, 0);
        const denominator = filter.map(data => parseInt(data.Peso));
        const sumDenominator = denominator.reduce(function (total, num) {
            return total + num;
        }, 0);

        const result = sumNumerator / sumDenominator;


        return res.json(result);
    }
}
