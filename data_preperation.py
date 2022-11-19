import csv


def main():
    with open('results.csv', 'r') as f:
        reader = csv.reader(f)
        # loop through each row and print each value
        first_row = True
        entries= []
        for row in reader:
            print(row)
            if row == "\n":
                return
            if first_row:
                first_row = False
            else:
                if row[3] != "NA":
                    date = row[0]
                    team1 = row[1]
                    team2 = row[2]
                    team1score = row[3]
                    team2score = row[4]
                    tournament = row[5]
                    city = row[6]
                    country = row[7]
                    neutral = row[8]
                    scorediff = int(team1score) - int(team2score)

                    if scorediff == 0:
                        home_win = "0.5"
                    elif scorediff > 0:
                        home_win = "1"
                    elif scorediff < 0:
                        home_win = "0"
                    entry = [date, team1, team2, team1score, team2score, tournament, city, country, neutral, home_win]
                    entries.append(entry)
                    # print(entry)
                    # print(team1)


    with open('results_modified_without_scores.csv', 'w') as f:
        f.write("date,home_team,away_team,tournament,city,country,neutral,home_win\n")
        for entry in entries:
            f.write(entry[0] + "," + entry[1] + "," + entry[2] + "," + entry[5] + "," + entry[6] + "," + entry[7] + "," + entry[8] + "," + entry[9] + "\n")






if __name__ == '__main__':

    main()
