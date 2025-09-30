import 'package:flutter/material.dart';

class ExpandedExample extends StatelessWidget {
  const ExpandedExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Expanded Example')),
      body: Column(
        children: <Widget>[
          Container(
            height: 100,
            color: Colors.blue,
            child: const Center(child: Text('Fixed Height: 100')),
          ),
          Expanded(
            child: Container(
              color: Colors.amber,
              child: const Center(child: Text('Expanded')),
            ),
          ),
          Container(
            height: 100,
            color: Colors.blue,
            child: const Center(child: Text('Fixed Height: 100')),
          ),
        ],
      ),
    );
  }
}
