import 'package:flutter/material.dart';

class PopupMenuButtonExample extends StatelessWidget {
  const PopupMenuButtonExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('PopupMenuButton'),
        actions: [
          PopupMenuButton<String>(
            onSelected: (String result) {
              // Handle selection
            },
            itemBuilder: (BuildContext context) => <PopupMenuEntry<String>>[
              const PopupMenuItem<String>(
                value: 'Option 1',
                child: Text('Option 1'),
              ),
              const PopupMenuItem<String>(
                value: 'Option 2',
                child: Text('Option 2'),
              ),
            ],
          ),
        ],
      ),
      body: const Center(child: Text('Click the menu on the top right')),
    );
  }
}
