import 'package:flutter/material.dart';

class TextButtonExample extends StatelessWidget {
  const TextButtonExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: TextButton(onPressed: () {}, child: const Text('Text Button')),
    );
  }
}
