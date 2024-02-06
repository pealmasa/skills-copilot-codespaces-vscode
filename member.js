function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['JavaScript', 'React', 'Node'],
        getSkills: function() {
            return this.skills;
        }
    }
    return member;
}