# Simple finds

1. Find all baseball leagues

2. Find all womens' leagues

3. Find all leagues where sport is any type of hockey

4. Find all leagues where sport is something OTHER THAN football

5. Find all leagues that call themselves "conferences"

6. Find all leagues in the Atlantic region

7. Find all teams based in Dallas

8. Find all teams named the Raptors

9. Find all teams whose location includes "City"

10. Find all teams whose names begin with "T"
"teams": Team.objects.filter(team_name__istartswith='T'),

11. Return all teams, ordered alphabetically by location
"teams": Team.objects.orderby('location'),

12. Return all teams, ordered by team name in reverse alphabetical order
#12 "teams": Team.objects.orderby('-team_name'),

13. Find every player with last name "Cooper"
"players": Player.objects.filter(last_name__icontains='cooper'),

14. Find every player with first name "Joshua"
"players": Player.objects.filter(first_name__icontains='joshua'),

15. Find every player with last name "Cooper" EXCEPT FOR Joshua
"players": Player.objects.filter(first_name__icontains='joshua').exclude(last_name__icontains='cooper'),

16. Find all players with first name "Alexander" OR first name "Wyatt"
"players": Player.objects.filter(first_name__icontains='alexander') | (first_name__icontains='alexander'),
