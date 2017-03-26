import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
//import '/client/lib/class.html'
//import '/client/lib/class.js';


MemberList= new Mongo.Collection('members'); //Creates a new Database
SubjectList =new Mongo.Collection('subjects');
ClassList= new Mongo.Collection('classes');
PeriodList=new Mongo.Collection('periods');
RoutineList=new Mongo.Collection('routines');
Template.recentMember.helpers({
	recentList : function(){
		return MemberList.find(); //Return all the member list by sorted by order of join time
	},
	selectedClass :function(){	//This helper is called each time a member is found to be shown on the List
		memberId=this._id;		//This gets the id of the current member id 
		var selectedMember=Session.get('selectedMember');	//Get the saved session variable of selected Member that we saved in click event
		if (memberId==selectedMember) {
			return "selected";
		}
	},
	
});
Template.recentMember.events({
	'click .member': function(){
		var memberId=this._id;
		Session.set('selectedMember',memberId);					//Save the Id of the member from the click action to session var
		//console.log(selectedMember);
	},
});


