import numpy as np
arr1=np.array([[1,2,3],
                [4,5,6],
                [7,8,9]])

arr2=np.array([1,2,-1])

'''
print(arr1)
print(arr1.ndim)
print(arr1.shape)
arr1=arr1+(arr1*5)
print(arr1**2)
print(np.sqrt(np.floor(arr1**3)))
print(arr1[0:3:1])
print(arr1[0])
print(arr1[0:2,0:2])
print(arr1[:,0:2])
print(arr1[:,::-1])
print((arr1**2)*np.pi)
print(arr1**(np.pi))
print(arr2>=2)

(arr1*arr2)

#Aggregate Functions

print(np.mean(arr1))
print(np.min(arr2))
print(np.argmin(arr1))
print(np.sum(arr1,axis=1))


#Filtering : 

arr2[arr2>2]=100
print(arr2)

array=np.array([15,8,154,26,79,35,12,45,6,9,55,-1,58,-5,-8])
adults=array[(array>=18) & (array<=100)]
kids=array[(array>=0) & (array<18)]
all=np.array([True,False,True,False])
Or=all[(all==True)|(all==False)]
print(Or)
#   Where function for flattening 2D or Higher Dimensional arrays



#Random values for matrixes using random 

rng=np.random.default_rng(seed=None)
print(rng.integers(low=1,high=100,size=(3,3,3)))
print(np.random.uniform(0,1,size=(1,5)))

ar=np.array([1,5,6,8,9])
(rng.shuffle(ar))
print(ar)
fruits=np.array(['🐱','👍','😎'])
fruits=rng.choice(fruits,size=(3,3,3))
print(fruits)

'''