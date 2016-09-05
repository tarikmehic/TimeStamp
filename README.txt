1. Packages used: kadira:flow-router
                  kadira:blaze-layout
                  erasaur:meteor-lodash
                  stolinski:stylus-multi
                  fortawesome:fontawesome
                  spiderable
                  fastclick
                  raix:handlebar-helpers
                  aldeed:collection2
                  aldeed:autoform
                  accounts-ui
                  accounts-password
                  matb33:bootstrap-glyphicons
                  zimme:active-route
                  gwendall:auth-client-callbacks
                  meteortoys:allthings
                  datariot:ganalytics

Client:
- Layouts:
        - HomeLayout: Responsible for the entering screen.
        - MainLayout: Responsible for the users screen
            * Contains > Header and > sideNav
            * Pulls the main template
- Partials:
        - Header: Responsible for the headers inside of the layouts.
        - Side Navigation: Resposnible for the side navigation inside of the layout
            - Header and sideNav: are seperated for the convinience of the code.
- Projects:
Whole folder is location for all the things that are directly connected to the project itself.
The code is mostly used on schemas, html setups and the forms for inserting data.

    - newProject.html: Html with some meteor form connected to MongoDB, meaning the creating of quickForm is located
                       there. This as well results in the means of storing the data into database, after form is
                       completed.

    - Project.html: Contains article for one individual project containing the parameters of title, working hours and
                     units that were included in working hours. This is pure html form.

    - Projects.html: 