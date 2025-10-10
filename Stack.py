#Default list methods
st=[]
st.append(15)
st.append(31)
print(st)
st.pop()
print(st)

#With Collections and its methods
import collections
st1=collections.deque()
st1.append(3)
st1.append(6)
st1.append(8)
print(st1)
st1.pop()
print(st1)

#With Queue and its method(put,get)
import queue
st2=queue.LifoQueue()
st2.put(1)
st2.put(5)
print(st2.queue)
st2.get()
print(st2.queue)