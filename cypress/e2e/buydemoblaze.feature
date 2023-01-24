Feature: buy demoblaze smartphone
    Scenario: i want to create user demoblaze
        Given i enter to demoblaze
        When i do click in option Sing up
        When into the Username
        When into Password
        When i do click in boton sing up
        Then i show my the website is correct

    Scenario: i want to user login in demoblaze and buy a laptop
        Given i enter to demoblaze
        Then i do click in option login
        Then into the Username in login
        Then into Password in login
        Then i do click in boton login
        Then i show my name user
        Then i do clic in option laptop
        Then i do clic in laptop sony
        Then i do clic in boton add to cart
        Then i wacht the mensaje product added
