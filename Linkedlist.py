#Linked list
class node:
    def __init__(self,data):
        self.data=data
        self.next=None
class ll:
    def __init__(self):
        self.head=None
    def traversal(self):
        if self.head is None:
            print("The linked list is empty")
        else:
            temp=self.head
            while temp is not None:
                print(temp.data,end="--->")
                temp=temp.next
            print()
    def add_beg(self,data):
        new_node=node(data)
        if self.head is None:
            self.head=new_node
        else:
            new_node.next=self.head
            self.head=new_node
    def add_end(self,data):
        new_node=node(data)
        if self.head is None:
            print("The linked list is empty")
        else:
            temp=self.head
            while temp.next is not None:
                temp=temp.next
            temp.next=new_node
    def add_after(self,data,key):
        if self.head is None:
            print("The linked list is empty")
        else:
            temp=self.head
            while temp is not None:
                if key==temp.data:
                    break
                temp=temp.next
            if temp is None:
                print("The node is not in linked list")
            else:
                new_node=node(data)
                new_node.next=temp.next
                temp.next=new_node
    def add_before(self,data,key):
        if self.head is None:
            print("The linked list is empty")
        else:
            temp=self.head
            while temp is not None:
                if key==temp.next.data:
                    break
                temp=temp.next
            if temp is None:
                print("The node is not in linked list")
            else:
                new_node=node(data)
                new_node.next=temp.next
                temp.next=new_node
    def del_beg(self):
        if self.head is None:
            print("The linked list is empty")
        else:
            self.head=self.head.next
    def del_end(self):
        if self.head is None:
            print("The linked list is empty")
        else:
            temp=self.head
            while temp.next.next is not None:
                temp=temp.next
            temp.next=None
    def del_position(self,key):
        if self.head is None:
            print("The linked list is empty")
        elif key==self.head.data:
            self.head=self.had.next
        else:
            temp=self.head
            while temp.next is not None:
                if key==temp.next.data:
                    break
                temp=temp.next
            if temp.next is None:
                print("Node absent in linked list")
            else:
                temp.next=temp.next.next
ll1=ll()
ll1.add_beg(23)
ll1.add_beg(34)
ll1.traversal()
ll1.add_end(13)
ll1.traversal()
ll1.add_after(14,23)
ll1.traversal()
ll1.add_before(67,23)
ll1.traversal()
ll1.del_beg()
ll1.traversal()
ll1.del_end()
ll1.traversal()
ll1.del_position(23)
ll1.traversal()