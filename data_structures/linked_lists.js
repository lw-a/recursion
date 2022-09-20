// Node
const Node = (value = null) => {

  return { value, nextNode: null };
};

console.log(Node())
const test = Node(19);
console.log(test.value)
console.log(test.nextNode)

// Linked List
const LinkedList = () => {

  let head = null;

  // append(value)
  const append = (value) => {
    const node = Node(value);

    if (head === null) return head = node;

    let pointer = head;
    while (pointer.nextNode != null) {
      pointer = pointer.nextNode;
    };

    pointer.nextNode = node;
  };

    // prepend(value)
    const prepend = (value) => {
      const node = Node(value);

      if (head === null) return head = node;

      let temp = head.nextNode;

      head = node;
      head.nextNode = temp;
    };

  return { append, prepend };
};

const list = LinkedList();
console.log(list)
list.append(1)
list.append(2)
list.append(3)
console.log(list.append(4))
// how do I test if it works?
list.prepend(0)
