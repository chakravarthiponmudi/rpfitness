function validate(){
    alert("validated");
}

function member() {
    this.name;
    this.email;
    this.phone;
    this.uuid;
    this.appData = [];
}

function AppData() {
    this.date;
    this.time;
    this.energyLevel;
    this.doms;
    this.rpe;
    this.dailyData = [];
    this.measurements = [];

}
     
function DailyData() {
    this.workouts = [];
    this.lifeStyle = {};
}

function Workout(name) {
    this.name = name;
    this.repsAndWeights = [];
}

function RepsAndWeights(reps, weight) {
    this.reps = reps;
    this.weight = weight;
}

function LifeStyle() {
    this.bedTime = 0;
    this.wakeUpTime = 0;
    this.sleepQuality = 0;
    this.breakfast = "";
    this.lunch = "";
    this.dinner = "";
    this.snacks = "";
    this.water = 0;
    this.alcohol = "";
    this.coffee = 0;
    this.smoking = 0;
    this.aeratedDrinks = 0;
    this.other = "";
    this._sleepHours = 0;


    this.sleepHours = function() {
        //todo: calculate sleep hours validate that wakeuptime is after bedtime
        //also conver the time from string to time format
        return this.wakeUpTime - this.bedTime;
    }

}

function Measurements(date, weight, chest, waist, hips, shoulders, rThigh, lThigh, rCalf, lCalf, restingHR) {
    this.date = date;
    this.weight = weight;
    this.chest = chest;
    this.waist = waist;
    this.hips = hips;
    this.shoulders = shoulders;
    this.rThigh = rThigh;
    this.lThigh = lThigh;
    this.rCalf = rCalf;
    this.lCalf = lCalf;
    this.restingHR = restingHR;
}