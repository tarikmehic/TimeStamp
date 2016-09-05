FlowRouter.route('/', {
    name: 'home',
    action(){
        BlazeLayout.render('homeLayout');
    }
});

FlowRouter.route('/project-screen', {
    name: 'project-screen',
    action(){
        BlazeLayout.render('mainLayout', {main: 'Projects'});
    }
});