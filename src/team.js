class Team {
    constructor() {
      this.members = new Set();
    }
  
    add(character) {
      if (this.members.has(character)) {
        throw new Error('Персонаж уже в команде');
      }
      this.members.add(character);
    }
  
    addAll(...characters) {
      characters.forEach((character) => {
        if (!this.members.has(character)) {
          this.members.add(character);
        }
      });
    }
  
    toArray() {
      return Array.from(this.members);
    }
  }
  
  export default Team;