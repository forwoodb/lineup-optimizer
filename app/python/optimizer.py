from pulp import *
import pandas as pd
import csv

# import csv data
csv_dk = pd.read_csv('./csv-data/DKSalaries.csv')

# convert csv data to dataframe
df_dk = pd.DataFrame(csv_dk)
print(df_dk)