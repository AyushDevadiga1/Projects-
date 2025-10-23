import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import plotly.express as px
import seaborn as sns
from sklearn.linear_model import LinearRegression
'''
x=[1,2,3,4,5]
y=[2,4,6,8,10]

plt.figure(figsize=(5,5),dpi=200) # Always declare before plot
plt.plot(x,y,'b.-',markeredgecolor='#000000',label='Y=2x')
plt.title('Simple Graph')
plt.legend('y=2x')
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.xticks(x)
plt.yticks(y)
plt.show()



x2=np.arange(0,10.5,0.5)
plt.title('Simple Graph 2 ')
plt.plot(x2[:7],x2[:7]**2,'b.-',label='')
plt.plot(x2[6:],x2[6:]**2,'b--',label='')
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.show()





data=[1,2,4]
values=['A','B','C']
patterns=['o','.','/']
plt.figure(figsize=(3,3))
plt.title('Bargraph')
bar=plt.bar(values,data)
for bars in bar:
    bars.set_hatch(patterns.pop(0))
plt.show()





poketab=pd.read_csv('pokemon.csv')
plt.title('Attacks and Defences of different pokemons')
plt.plot(poketab.Attack[:21],'r--')
plt.plot(poketab.Defense[:21],'b--')
plt.xlabel('Rate of Attack and Defence')
plt.ylabel('Total Rate of the Pokemin')
plt.show()


'''
