
Template.newRegForm.events({
	'submit form' : function(event){		//using submit form event as it enables the user to submit the form by pressing the return key as well as the submit 
		event.preventDefault();				//Prevents the browser to refresh as the event type is form submit
		console.log("Form submit");
		console.log(event.target.memberName.value);
		console.log(event.target.memberAddress.value);
		console.log(event.target.memberBirthDate.value);
		//console.log(event.target.occupation.value);
		console.log(event.target.mobileNo.value);
		console.log(event.target.memberEmail.value);
		

		var memberNameVar=event.target.memberName.value;
		var memberAddressVar=event.target.memberAddress.value;
		var memberBirthVar=event.target.memberBirthDate.value;
		//var memberOccupationVar=event.target.occupation.value;
		var memberMobileVar=event.target.mobileNo.value;
		var memberEmailVar=event.target.memberEmail.value;
		
		MemberList.insert({
			memName : memberNameVar,
			memAddress : memberAddressVar,
			memBirth: memberBirthVar,
			//memOccupation : memberOccupationVar,
			memMobile : memberMobileVar,
			memEmail : memberEmailVar,
			
		});
		event.target.memberName.value="";
		event.target.memberAddress.value="";
		event.target.memberBirthDate.value="";
		//event.target.occupation.value="";
		event.target.mobileNo.value="";
		event.target.memberEmail.value="";
		
		Session.set('formSuccess',true);
		Meteor.defer(function(){
			Router.go('submitSuccess');
		});
		
	},
	
});
Template.newRegForm.helpers({
	formSuccess : function(){
		var flag=Session.get('formSuccess');
		Session.set('formSuccess',false);
		return flag;
	}
});
Template.newRegForm.onCreated(function newRegFormOnCreated(){
	
});
Template.newClassForm.events({
	'submit form' : function(event){		//using submit form event as it enables the user to submit the form by pressing the return key as well as the submit 
		event.preventDefault();				//Prevents the browser to refresh as the event type is form submit
		console.log("Form submit");
		console.log(event.target.className.value);
		console.log(event.target.status.value);

		var classNameVar=event.target.className.value;
		var statusVar=event.target.status.value;
		ClassList.insert({
			className : classNameVar,
			routineFlag : statusVar,
			
		});
		event.target.className.value="";
		event.target.status.value="";
		
		Session.set('formSuccess',true);
		Meteor.defer(function(){
			Router.go('submitSuccess');
		});
		
	},
	
});
Template.newSubjectForm.events({
	'submit form' : function(event){		//using submit form event as it enables the user to submit the form by pressing the return key as well as the submit 
		event.preventDefault();				//Prevents the browser to refresh as the event type is form submit
		console.log("Form submit");
		console.log(event.target.subjectName.value);
		console.log(event.target.moduleName.value);

		var subjectNameVar=event.target.subjectName.value;
		var moduleVar=event.target.moduleName.value;
		SubjectList.insert({
			subjectName : subjectNameVar,
			module : moduleVar,
			
		});
		event.target.subjectName.value="";
		event.target.moduleName.value="";
		
		Session.set('formSuccess',true);
		Meteor.defer(function(){
			Router.go('submitSuccess');
		});
		
	},
	
});
Template.newPeriodForm.events({
	'submit form' : function(event){		//using submit form event as it enables the user to submit the form by pressing the return key as well as the submit 
		event.preventDefault();				//Prevents the browser to refresh as the event type is form submit
		console.log("Form submit");
		console.log(event.target.subjectName.value);
		console.log(event.target.moduleName.value);

		var subjectNameVar=event.target.subjectName.value;
		var moduleVar=event.target.moduleName.value;
		var endTimeVar=event.target.endTime.value;
		PeriodList.insert({
			periodName : subjectNameVar,
			startTime : moduleVar,
			endTime :endTimeVar,
		});
		event.target.subjectName.value="";
		event.target.moduleName.value="";
		
		Session.set('formSuccess',true);
		Meteor.defer(function(){
			Router.go('submitSuccess');
		});
		
	},
	
});