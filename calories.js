var caloriesCounter = {
    gender: null,
    age: null,
    height: null,
    weight: null,
    activity: null,
    countButton: null,
    sectionWrapper: null,
    sectionText: null,
    start: function() {
        this.sectionWrapper = document.getElementById('wrapper');
        this.sectionText = document.getElementById('res');
        this.gender1 = document.getElementById('gender1');
        this.gender2 = document.getElementById('gender2');
        this.age = document.getElementById('age');
        this.height = document.getElementById('height');
        this.weight = document.getElementById('weight');
        this.activity1 = document.getElementById('min');
        this.activity2 = document.getElementById('low');
        this.activity3 = document.getElementById('mid');
        this.activity4 = document.getElementById('high');
        this.countButton = document.getElementById('sub');
        var that = this;
        this.countButton.addEventListener('click', function(e) {that.countCalories(e)});
    },
    countCalories: function() {
        if(this.gender1.checked === true) {
            var formula = (10*Number(this.weight.value))+(6.25*Number(this.height.value))-(5*Number(this.age.value))+5;
        } else if(this.gender2.checked === true) {
            var formula = (10*Number(this.weight.value))+(6.25*Number(this.height.value))-(5*Number(this.age.value))-161;
        } else {
            window.alert('Укажите пол!');
        }
        if(this.activity1.checked === true) {
           var result = formula*1.2;
        } else if(this.activity2.checked === true) {
            var result = formula*1.375;
        } else if(this.activity3.checked === true) {
            var result = formula*1.55;
        } else if(this.activity4.checked === true) {
            var result = formula*1.725;
        }
        this.sectionWrapper.style.height = '800px';
        this.sectionText.innerHTML = 'Ваша суточная норма калорий по формуле Миффлина - Сан Жеора (ккал): \
        ' + result;
    }
};
caloriesCounter.start();