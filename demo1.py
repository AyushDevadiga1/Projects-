import pandas as pd
'''
# Series

nums=[100,200,400,600,650,700,-777]
alphabets=['a','b','c','d','e','f','g']
o1=pd.Series(nums,index=alphabets)
print(o1)
print(o1.loc['a'])
print(o1.iloc[-1])
o2=(o1[o1<=500])
print(o2)



#Using Hashmap for 1 Dimension

hashmap={'Day1':1250,'Day2':2000,'Day3':1900}
o2=pd.Series(hashmap)
print(f'{o2}\n')
low_intake_of_calories=o2[o2<2000]
high_intake_of_calories=o2[o2>=2000]
print(f'Days we hade low intake of calories\n{low_intake_of_calories}\n')
print(f'Days we hade high intake of calories\n{high_intake_of_calories}\n')




#Using Dictionaries and Dataframes

data={'Name':['Axe','Cobblestone','Mudkip','Dante'],
      'Age':[15,18,20,100]
      }
o3=pd.DataFrame(data,index=['Emp1','Emp2','Emp3','Emp4'])
print(f'\n{o3}\n')
print(o3.loc['Emp2']) #The only method of accessing when added the index
o3['Job']=['Woodcutter','Minecraft Player','Pokemon','Unemployed']
print(f'\n{o3}\n')
new_data=pd.DataFrame({'Name':'Yoshikage Kira','Age':25,'Job':'Fictional Character'},index=['Emp5']) # The syntax is a must also the object must be created before concatinating or it wont work
o3=pd.concat([o3,new_data])
print(f'{o3}\n')






#Using CSV/JSON Files

o4=pd.read_csv('pokemon.csv')
print(o4[:6].to_string)
print(o4[['Job Role','Equality Score']][:11].to_string) # When using multiple parameters double squared brackets are a must 
print(o4.loc[2].to_string)

o5=pd.read_csv('pokemon.csv',index_col='Job Role')
print(o5[:11])
print(o5.loc['Manager'])  # By using the index only
print(o5['Equality Score'][0:11]>0)
print(o5['Equality Score'].sum())
print(o5.max(numeric_only=True))    #Check for each numeric columns by numeric_only attribute
print(o5.iloc[0:11:2,0:2])          #[RowStart:RowEnd:Step,ColumnStart:ColumnEnd]


'''

#Grouping and other cleaning , transformation techiques

o6=pd.read_csv('pokemon.csv')
print(o6[:50].to_string)