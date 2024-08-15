function deckOfCards(cards) {
    function createCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];

        if (!validFaces.includes(face)) {
            throw new Error('Invalid face!');
        }

        if (!validSuits.includes(suit)) {
            throw new Error('Invalid suit!');
        }

        let suitToChar = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }

        return {
            face,
            suit,
            toString() {
                return `${face}${suitToChar[suit]}`;
            }
        }

    }

    let result = []
    for (let card of cards) {
        let face = card.substring(0, card.length - 1);
        let suit = card[card.length - 1]
        try {
            result.push(createCard(face, suit));
        } catch (error) {
            console.log(`Invalid card: ${card}`)
            return;
        }
    }
    console.log(result.join(' '))
}
deckOfCards(['AS', '10D', 'KH', '2C'])