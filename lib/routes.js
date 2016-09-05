FlowRouter.route('/', {
    name: 'home',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('homeLayout');
    }
});

FlowRouter.route('/project-screen', {
    name: 'project-screen',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('mainLayout', {main: 'Projects'});
    }
});