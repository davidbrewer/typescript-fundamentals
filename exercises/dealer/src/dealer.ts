/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
function shuffleArray(a: any[]) {
  // Iterate over the array
  for (let i = a.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

export enum Suit {
  Clubs,
  Diamonds,
  Hearts,
  Spades
};

export enum CardNumber {
  Ace,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King
};

type Card = [Suit, CardNumber];
type Deck = Card[];

export class Dealer {
  deck: Deck;

  constructor() {
    this.deck = Dealer.getNewDeck();
    shuffleArray(this.deck);
  }

  static getNewDeck(): Deck {
    let deck: Deck = []
    let suitCount = Object.keys(Suit).length / 2
    let numCount = Object.keys(CardNumber).length / 2

    let suit: number, num: number;
    for (suit = 0; suit < suitCount; suit++) {
      for (num = 0; num < numCount; num++) {
        deck.push([suit, num]);
      }
    }
    return deck;
  }

  // Deals size number of cards
  dealHand(size: number): Card[] {
    if (size < 1) {
      throw "Oops, can't deal negative cards";
    }

    let hand: Card[] = [];
    while (hand.length < size) {
      let card = this.deck.shift();
      if (!card) {
        throw "Oops, ran out of cards";
      }
      hand.push(card);
    }
    return hand;
  }

  // returns number of cards left in deck
  getLength(): number {
    return this.deck.length;
  }

  // Given a card type, convert it to a string.
  // Example: readCard(card) => "Seven of Spades"
  readCard(card: Card): string {
    return `${CardNumber[card[1]]} of ${Suit[card[0]]}`
  }
}
