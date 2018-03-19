const Alexa = require('alexa-sdk');

const facts = [
	'Elefanten können an Trauer sterben. Wenn sie traurig sind, weil zum Beispiel ein Familienmitglied gestorben ist, fressen sie tagelang nichts, legen sich auf den Boden und bewegen sich nicht, bis sie schließlich sterben.',
	'Die Elefanten gehören biologisch zur Ordnung der Rüsseltiere und sind deren einzig lebende Vertreter.',
	'Der größte bekannte Elefant war 4 komma 2 1 Meter hoch und 10 komma 3 9 Meter lang.',
	'Die Schwangerschaft einer Elefantenkuh ist mit bis zu 22 Monaten die längste unter allen Landsäugetieren.',
	'Bei der Geburt wiegt ein Elefantenbaby circa 100 kilogramm und fällt aus circa 70 zentimeter Höhe auf den Boden.',
	'Die Haut eines Elefanten ist circa 2 zentimeter dick.',
	'Elefanten sind die größten lebenden Landtiere.',
	'Elefantenherden bestehen nur aus Jungtieren und Kühen. Die Bullen sind weitestgehend Einzelgänger.',
	'Elefanten kommunizieren nicht über das Trompeten mit ihrem Rüssel, sondern mit für Menschen unhörbaren Infraschalllauten, die für sie über viele Kilometer hörbar sind.',
	'Einem Elefanten wachsen in seinem Leben sechs mal neue Zähne.',
	'Der Rüssel eines Elefanten wird von 40000 Muskeln bewegt und ist damit sehr kräftig und beweglich.',
	'Seinen Rüssel kann ein Elefant sogar als Schnorchel nutzen um zum Beispiel einen Fluss zu durchqueren.',
	'Pro Tag nimmt ein Elefant circa 250000 Kilokalorien zu sich.',
	'Ein Elefant ist täglich 17 Stunden am Essen.',
	'Die Intelligenz von Elefanten ist weitgehend bekannt. Sie können sogar einfache Rechenaufgaben lösen und sich selbst im Spiegel erkennen.'
]

const handlers = {
	'LaunchRequest': function () {
		this.emit('GetFactIntent');
	},
	'GetFactIntent': function () {
		const i = Math.floor(Math.random() * facts.length);
		const randomFact = facts[i];

		this.emit(':tell', 'Wusstest du schon? ' + randomFact);
	},
	'AMAZON.HelpIntent': function () {
		this.emit(':ask', 'Sag einfach: Nenn mir einen Fakt! Was kann ich für dich tun?');
	},
	'AMAZON.CancelIntent': function () {
		this.emit(':tell', 'Okay! Tschüss!');
	},
	'AMAZON.StopIntent': function () {
		this.emit(':tell', 'Okay! Tschüss!');
	},
};

exports.handler = function (event, context) {
	const alexa = Alexa.handler(event, context);
	alexa.registerHandlers(handlers);
	alexa.execute();
};
