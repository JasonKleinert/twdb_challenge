import json 
import csv

def emails_as_json():
    with open('emails.csv', 'r') as f:
        reader = csv.reader(f)
        next(reader)
        data = []
        # create an array to check for non unique email addresses
        duplicates_checker = []
        for row in reader:
            # check if the email is unique
            if row[0] not in duplicates_checker:
                # if the email is unique, add it to the arrays
                duplicates_checker.append(row[0])
                data.append({'address': row[0]})
        
        return data