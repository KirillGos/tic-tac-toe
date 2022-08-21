const Gameboard = {
    users: [],
     playerName: function() {
        let X = document.querySelector('.X');
        let O = document.querySelector('.O');
        X.addEventListener('click', this.selectCharacter);
        O.addEventListener('click', this.selectCharacter);
        let nameInput = document.querySelector('#player-character');
        let user = '';
        nameInput.addEventListener('keyup', () => {
            user = nameInput.value;
        });
    },
    selectCharacter: function(e) {
        if(e.target.className === 'X') {
            let character = 'X';
            return character;
        } else if(e.target.className === 'O') {
            let character = 'O';
            return character;
        }
    },
    constructor: function(name, character) {
        return {name, character}
    },
    userName: function(e) {
            let name = playerName.user; 
            console.log(name)
            return name;
    },
    pushUser: function() {
        let name = this.userName();
        let character = this.selectCharacter();
        this.users.push(constructor(name, character));
    }
};
Gameboard.playerName();
