const STARTHEALTH = 50;
const STARTSTANIMA = 30;
const STARTMANA = 30;
const DECKSIZE = 5;
const PUCNHDAMAGE = 5;
const PUNCHDRAIN = 2;
const KICKDAMAGE = 7;
const KICKDRAIN = 4;
const FIREBALLDAMAGE = 10;
const FIREBALLDRAIN = 15;
const HEALTHBOOST = -20;
const HEALDRAIN = 10;
const SPACINNN = "                                           ";
const HIGHESTSTAMDRAIN = KICKDRAIN;
const HIGHESTMANADRAIN = FIREBALLDRAIN;

export var winner = "NONE";
var screenMessage = "";
export var reset = false;

function Fighter(name){
    this.name = name
    this.health = STARTHEALTH,
    this.stanima = STARTSTANIMA,
    this.mana = STARTMANA,
    this.enemey = function(opp){
        this.enemey = opp;
    },
    this.deck = [],
    this.cards = [],
    this.lastCard = null,
    this.scalar = 1;
    this.endOfTurn = 0;
    this.extraMoves = 0;
    this.screenMessage = "";
    this.namesCards = [];
    this.curCard;
    this.emult;
    this.mult;
}


function generateCards(Fighter, num){
    var thisDeck = [];
    var maxNum = cardChars.length - 1;
    for(var i = 0; i < num; i++){
        thisDeck[i] = randomNum(0, maxNum);
        Fighter.cards[i] = cardChars[thisDeck[i]];
        Fighter.namesCards[i] = cardNames[thisDeck[i]]
    }
    Fighter.deck = thisDeck;
}

export function damage(Fighter, dam){
    Fighter.health = Math.round(Fighter.health - dam);
}

function manaUse(Fighter, drain){
    Fighter.mana = Math.round(Fighter.mana - drain);
}

function stanimaUse(Fighter, drain){
    Fighter.stanima = Math.round(Fighter.stanima - drain);
}

var cardNames = [
    "Punch", "Punch","Punch", "Punch", "Punch", "Kick", "Kick", "Kick", "Kick", "Fireball", "Heal", "Rest", "Multiplier", "Poison"
]
var cardChars = [
    "P", "P","P", "P", "P", "K", "K", "K", "K", "F", "H", "R", "M", "Po"
]

//PUT COMBO BACK IN
export function useCard(Fighter, placeInDeck){
    //USE THE CARD, GENERATE ANOTHER ONE, SET THE CARD TO THE NEW ONE
    if(reset){
      reset = false;
    }
    var using = Fighter.deck[placeInDeck];
    var opp = Fighter.enemey;
    var caster = Fighter;
    var stam = Fighter.stanima;
    var mana = Fighter.mana;
    caster.mult = false;
    var scal = Fighter.scalar;
    var combo = false;
    function enough(energy, demand){
        if(energy >= demand){
            return true;
        }else{
            return false;
        }
    }
    function partial(current, demand){
        return current / demand;
    }
    function punch(){
    if(enough(stam, PUNCHDRAIN)){
            damage(opp, PUCNHDAMAGE * scal);
            stanimaUse(caster, PUNCHDRAIN);
        }else{
          if(stam > 0){
            damage(opp, PUCNHDAMAGE * scal * partial(stam, PUNCHDRAIN));
            stanimaUse(caster, PUNCHDRAIN * partial(stam, PUNCHDRAIN));
          }else{
            stanimaUse(caster, -PUNCHDRAIN * scal);
          }  
        } 
    }
    function kick(){
        if(enough(stam, KICKDRAIN)){
            damage(opp, KICKDAMAGE * scal); 
            stanimaUse(caster, KICKDRAIN);
        }else{
          if(stam > 0){
           damage(opp, KICKDAMAGE * scal * partial(stam, KICKDRAIN)); 
            stanimaUse(caster, KICKDRAIN  * partial(stam, KICKDRAIN));
          }else{
            stanimaUse(caster, -KICKDRAIN * scal);
          }
 
        }
    }
    function fireball(){
    if(enough(mana, FIREBALLDRAIN)){
            damage(opp, FIREBALLDAMAGE * scal);
            manaUse(caster, FIREBALLDRAIN);
        }else{
          if(mana > 0){
            damage(opp, FIREBALLDAMAGE * scal * partial(mana, FIREBALLDRAIN));
            manaUse(caster, FIREBALLDRAIN * partial(mana, FIREBALLDRAIN));
          }else{
            manaUse(caster, -FIREBALLDRAIN * scal);
          }
        }
    }
    function heal(){
    if(enough(mana, HEALDRAIN)){
            damage(caster, HEALTHBOOST * scal);
            manaUse(caster, HEALDRAIN);
        }else{
          if(mana > 0){
            damage(caster, HEALTHBOOST * scal * partial(mana, HEALDRAIN));
            manaUse(caster, HEALDRAIN * partial(mana, HEALDRAIN));
          }else{
            manaUse(caster, -HEALDRAIN * scal);
          }
        } 
    }
    switch(using){
        case 0: //Punch
        punch();
        break;
        case 1: //Punch
        punch();
        break;
        case 2: //Punch
        punch(); 
        break;
        case 3: //Punch
        punch();
        break;
        case 4: //Punch
        punch();
        break;
        case 5: //Kick
        kick();
        break;
        case 6: //Kick
        kick();
        break;  
        case 7: //Kick
        kick();
        break;  
        case 8: //Kick
        kick();
        break; 
        case 9: //Fireball
        fireball();
        break;
        case 10: //Heal
        heal();
        break;
        case 11: //Rest
        if(stam < STARTSTANIMA){
            stanimaUse(caster, -HEALDRAIN * scal);
        }
        if(mana < STARTMANA){
            manaUse(caster, -HEALDRAIN * scal);
        }
        damage(caster, -2 * scal);
        break; 
        case 12: //Mult
        caster.scalar = 2 * scal;
        caster.mult = true;
        break;
        case 13: //Poison
        opp.scalar = 0.5 * scal * opp.scalar;
        opp.emult = true;
        break;
    }
    Fighter.lastCard = Fighter.cards[placeInDeck];
    Fighter.curCard = Fighter.namesCards[placeInDeck];
    var numMax = cardChars.length - 1;
    var newCard = randomNum(0, numMax)
    Fighter.deck[placeInDeck] = newCard;
    Fighter.cards[placeInDeck] = cardChars[newCard];
    Fighter.namesCards[placeInDeck] = cardNames[newCard];
    if(!caster.mult){
        caster.scalar = 1;
    }
    if(!caster.emult){
      caster.scaler = 1;
    }
   

}

export function randomNum(min, max) {//MAX INCLUDED
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export function gameOver(f1, f2){
    if (f1.health <= 0){
        winner = f2.name;
    }else if(f2.health <= 0){
        winner = f1.name;
    }
    if(winner == f1.name || winner == f2.name){
        return true;
    }else{
        return false;
    }

}

export function bot(){
  smartBot();
  if(!gameOver(Fighter1, Fighter2)){
  Fighter2.screenMessage = "Opponent has cast " + Fighter2.curCard;
  }
}

function smartBot(){

    var bot = Fighter2;
    var mana = Fighter2.mana;
    var stanima = Fighter2.stanima;
    var cardUsed = false;

    while(!cardUsed){//Ensures that only one card is selected

      //If opponent is vulnerable, deliver killshot with kick
      for(var i = 0; i < Fighter2.DECKSIZE; i++){
        if((bot.opp.health <= KICKDAMAGE) && (bot.cards[i] === "K") &&(stanima >= KICKDRAIN)){
          useCard(Fighter2, i);
          cardUsed = true;
        }
      }
    
      //If opponent is vulnerable, deliver killshot with punch
      for(i = 0; i < Fighter2.DECKSIZE; i++){
        if((bot.opp.health <= PUCNHDAMAGE) && (bot.cards[i] === "P") &&(stanima >= PUNCHDRAIN)){
          useCard(Fighter2, i);
          cardUsed = true;
        }
      }
    
      //If opponent casts multiplier, counter with poison
      for(i = 0; i < Fighter2.DECKSIZE; i++){
        if((bot.opp.lastCard === "M") && (bot.cards[i] === "Po")){
          useCard(Fighter2, i);
          cardUsed = true;
        }
      }

      //If health is getting low, use heal
      for(i = 0; i < Fighter2.DECKSIZE; i++){
        if((bot.health <= 20) && (bot.cards[i] === "H")){
          useCard(Fighter2, i);
          cardUsed = true;
        }
      }

      //use multiplier is available
      for(i = 0; i < Fighter2.DECKSIZE; i++){
        if(bot.cards[i] === "M"){
          useCard(Fighter2, i);
          cardUsed = true;
        }
      }

      //if mana affords and is avaiable, cast heal
      for(i = 0; i < Fighter2.DECKSIZE; i++){
        if((bot.cards[i] === "H") && (mana >= HEALDRAIN)){
          useCard(Fighter2, i);
          cardUsed = true;
        }
      }
    
      //if mana affords and is avaiable, cast fireball
      for(i = 0; i < Fighter2.DECKSIZE; i++){
        if((mana >= FIREBALLDRAIN) && (bot.cards[i] === "F")){
          useCard(Fighter2, i);
          cardUsed = true;
        }
      }

      //if stanima affords and is avaiable, cast punch
      for(i = 0; i < Fighter2.DECKSIZE; i++){
        if((stanima >= PUNCHDRAIN) && (bot.cards[i] === "P")){
          useCard(Fighter2, i);
          cardUsed = true;
       }
      }

      //if stanima affords and is avaiable, cast kick
      for(i = 0; i < Fighter2.DECKSIZE; i++){
       if((stanima >= KICKDRAIN) && (bot.cards[i] === "K")){
          useCard(Fighter2, i);
          cardUsed = true;
       }
      }

      //if neither mana or stanima are not high enough to cast the most demanding card, use rest
      for(i = 0; i < Fighter2.DECKSIZE; i++){
        if((stanima <= HIGHESTMANADRAIN) || (mana <= HIGHESTMANADRAIN) && (bot.cards[i] === "R")){
          useCard(Fighter2, i);
          cardUsed = true;
       }
      } 

      //in the event that none of the above conditions are met, select a card at random from the hand
        useCard(Fighter2, randomNum(0, DECKSIZE - 1));
        cardUsed = true;
    }
}

export function resetGame(){
  Fighter1.health = STARTHEALTH;
  Fighter1.stanima = STARTSTANIMA;
  Fighter1.mana = STARTMANA;
  Fighter1.scalar = 1;
  generateCards(Fighter1, 5);
  Fighter2.health = STARTHEALTH;
  Fighter2.stanima = STARTSTANIMA;
  Fighter2.mana = STARTMANA;
  Fighter2.scalar = 1;
  generateCards(Fighter2, 5);
  winner = null;
  Fighter2.screenMessage = "";
  reset = true;
}

export var Fighter1 = new Fighter("Fighter1");
export var Fighter2 = new Fighter("Fighter2");
Fighter1.enemey(Fighter2);
Fighter2.enemey(Fighter1);
generateCards(Fighter1, 5);
generateCards(Fighter2, 5);