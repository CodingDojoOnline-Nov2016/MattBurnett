# ForeignKey Relationships

1. Find all teams in the Atlantic Soccer Conference

2. Find all (current) players on the Boston Penguins
#2 "players":Player.objects.filter(curr_team__team_name__icontains='penguins').filter(curr_team__location='boston'),

3. Find all (current) players in the International Collegiate Baseball Conference
#3 "players": Player.objects.filter(curr_team__league__sport__icontains='baseball')

4. Find all (current) players in the American Conference of Amateur Football with last name "Lopez"
#4 "players": Player.objects.filter(curr_team__league__sport__icontains='baseball').filter(curr_team__league__name__icontains='International Collegiate'),

5. Find all football players
#6 "players": Player.objects.filter(curr_team_league_sport__icontains='football'),

6. Find all teams with a (current) player named "Sophia"
#7 "teams": Team.objects.filter(curr_players__firstname__icontains='Sophia'),

7. Find all leagues with a (current) player named "Sophia"
#7 "teams": Team.objects.filter(curr_players__firstname__icontains='Sophia'),

8. Find everyone with the last name "Flores" who DOESN'T (currently) play for the Washington Roughriders
#8 "players": Player.objects.filter(last_name__icontains='flores').exclude(curr_team__team_name__icontains='roughriders'),
